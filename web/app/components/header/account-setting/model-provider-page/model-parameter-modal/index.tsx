import type {
  FC,
  ReactNode,
} from 'react'
import { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'
import { useTranslation } from 'react-i18next'
import type {
  DefaultModel,
  FormValue,
  ModelParameterRule,
} from '../declarations'
import { ModelStatusEnum } from '../declarations'
import ModelSelector from '../model-selector'
import {
  useTextGenerationCurrentProviderAndModelAndModelList,
} from '../hooks'
import { isNullOrUndefined } from '../utils'
import ParameterItem from './parameter-item'
import type { ParameterValue } from './parameter-item'
import Trigger from './trigger'
import type { TriggerProps } from './trigger'
import PresetsParameter from './presets-parameter'
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from '@/app/components/base/portal-to-follow-elem'
import { CubeOutline } from '@/app/components/base/icons/src/vender/line/shapes'
import { fetchModelParameterRules } from '@/service/common'
import Loading from '@/app/components/base/loading'
import { useProviderContext } from '@/context/provider-context'
import { TONE_LIST } from '@/config'
import { ArrowNarrowLeft } from '@/app/components/base/icons/src/vender/line/arrows'

export type ModelParameterModalProps = {
  isAdvancedMode: boolean
  mode: string
  modelId: string
  provider: string
  setModel: (model: { modelId: string; provider: string; mode?: string; features?: string[] }) => void
  completionParams: FormValue
  onCompletionParamsChange: (newParams: FormValue) => void
  debugWithMultipleModel: boolean
  onDebugWithMultipleModelChange: () => void
  renderTrigger?: (v: TriggerProps) => ReactNode
}
const stopParameerRule: ModelParameterRule = {
  default: [],
  help: {
    en_US: 'Up to four sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.',
    zh_Hans: '最多四个序列，API 将停止生成更多的 token。返回的文本将不包含停止序列。',
  },
  label: {
    en_US: 'Stop sequences',
    zh_Hans: '停止序列',
  },
  name: 'stop',
  required: false,
  type: 'tag',
  tagPlaceholder: {
    en_US: 'Enter sequence and press Tab',
    zh_Hans: '输入序列并按 Tab 键',
  },
}

const PROVIDER_WITH_PRESET_TONE = ['openai', 'azure_openai']
const ModelParameterModal: FC<ModelParameterModalProps> = ({
  isAdvancedMode,
  modelId,
  provider,
  setModel,
  completionParams,
  onCompletionParamsChange,
  debugWithMultipleModel,
  onDebugWithMultipleModelChange,
  renderTrigger,
}) => {
  const { t } = useTranslation()
  const { hasSettedApiKey } = useProviderContext()
  const [open, setOpen] = useState(false)
  const { data: parameterRulesData, isLoading } = useSWR((provider && modelId) ? `/workspaces/current/model-providers/${provider}/models/parameter-rules?model=${modelId}` : null, fetchModelParameterRules)
  const {
    currentProvider,
    currentModel,
    textGenerationModelList,
  } = useTextGenerationCurrentProviderAndModelAndModelList(
    { provider, model: modelId },
  )

  const hasDeprecated = !currentProvider || !currentModel
  const modelDisabled = currentModel?.status !== ModelStatusEnum.active
  const disabled = !hasSettedApiKey || hasDeprecated || modelDisabled

  const parameterRules: ModelParameterRule[] = useMemo(() => {
    return parameterRulesData?.data || []
  }, [parameterRulesData])

  const handleParamChange = (key: string, value: ParameterValue) => {
    onCompletionParamsChange({
      ...completionParams,
      [key]: value,
    })
  }

  const handleChangeModel = ({ provider, model }: DefaultModel) => {
    const targetProvider = textGenerationModelList.find(modelItem => modelItem.provider === provider)
    const targetModelItem = targetProvider?.models.find(modelItem => modelItem.model === model)
    setModel({
      modelId: model,
      provider,
      mode: targetModelItem?.model_properties.mode as string,
      features: targetModelItem?.features || [],
    })
  }

  const handleSwitch = (key: string, value: boolean, assignValue: ParameterValue) => {
    if (!value) {
      const newCompletionParams = { ...completionParams }
      delete newCompletionParams[key]

      onCompletionParamsChange(newCompletionParams)
    }
    if (value) {
      onCompletionParamsChange({
        ...completionParams,
        [key]: assignValue,
      })
    }
  }

  const handleInitialParams = () => {
    const newCompletionParams = { ...completionParams }
    if (parameterRules.length) {
      parameterRules.forEach((parameterRule) => {
        if (!newCompletionParams[parameterRule.name]) {
          if (!isNullOrUndefined(parameterRule.default))
            newCompletionParams[parameterRule.name] = parameterRule.default
          else
            delete newCompletionParams[parameterRule.name]
        }
      })

      onCompletionParamsChange(newCompletionParams)
    }
  }

  useEffect(() => {
    handleInitialParams()
  }, [parameterRules])

  const handleSelectPresetParameter = (toneId: number) => {
    const tone = TONE_LIST.find(tone => tone.id === toneId)
    if (tone) {
      onCompletionParamsChange({
        ...completionParams,
        ...tone.config,
      })
    }
  }

  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement='bottom-end'
      offset={4}
    >
      <div className='relative'>
        <PortalToFollowElemTrigger
          onClick={() => setOpen(v => !v)}
          className='block'
        >
          {
            renderTrigger
              ? renderTrigger({
                open,
                disabled,
                modelDisabled,
                hasDeprecated,
                currentProvider,
                currentModel,
                providerName: provider,
                modelId,
              })
              : (
                <Trigger
                  disabled={disabled}
                  modelDisabled={modelDisabled}
                  hasDeprecated={hasDeprecated}
                  currentProvider={currentProvider}
                  currentModel={currentModel}
                  providerName={provider}
                  modelId={modelId}
                />
              )
          }
        </PortalToFollowElemTrigger>
        <PortalToFollowElemContent className='z-[60]'>
          <div className='w-[496px] rounded-xl border border-gray-100 bg-white shadow-xl'>
            <div className='flex items-center px-4 h-12 rounded-t-xl border-b border-gray-100 bg-gray-50 text-md font-medium text-gray-900'>
              <CubeOutline className='mr-2 w-4 h-4 text-primary-600' />
              {t('common.modelProvider.modelAndParameters')}
            </div>
            <div className='max-h-[480px] px-10 pt-4 pb-8 overflow-y-auto'>
              <div className='flex items-center justify-between h-8'>
                <div className='text-sm font-medium text-gray-900'>
                  {t('common.modelProvider.model')}
                </div>
                <ModelSelector
                  defaultModel={(provider || modelId) ? { provider, model: modelId } : undefined}
                  modelList={textGenerationModelList}
                  onSelect={handleChangeModel}
                />
              </div>
              {
                !!parameterRules.length && (
                  <div className='my-5 h-[1px] bg-gray-100' />
                )
              }
              {
                isLoading && (
                  <div className='mt-5'><Loading /></div>
                )
              }
              {
                !isLoading && !!parameterRules.length && (
                  <div className='flex items-center justify-between mb-4'>
                    <div className='text-gray-900 font-semibold'>{t('common.modelProvider.parameters')}</div>
                    {
                      PROVIDER_WITH_PRESET_TONE.includes(provider) && (
                        <PresetsParameter onSelect={handleSelectPresetParameter} />
                      )
                    }
                  </div>
                )
              }
              {
                !isLoading && !!parameterRules.length && (
                  [
                    ...parameterRules,
                    ...(isAdvancedMode ? [stopParameerRule] : []),
                  ].map(parameter => (
                    <ParameterItem
                      key={`${modelId}-${parameter.name}`}
                      className='mb-4'
                      parameterRule={parameter}
                      value={completionParams[parameter.name]}
                      onChange={v => handleParamChange(parameter.name, v)}
                      onSwitch={(checked, assignValue) => handleSwitch(parameter.name, checked, assignValue)}
                    />
                  ))
                )
              }
            </div>
            <div
              className='flex items-center justify-between px-6 h-[50px] bg-gray-50 border-t border-t-gray-100 text-xs font-medium text-primary-600 cursor-pointer rounded-b-xl'
              onClick={() => onDebugWithMultipleModelChange()}
            >
              {
                debugWithMultipleModel
                  ? t('appDebug.debugAsSingleModel')
                  : t('appDebug.debugAsMultipleModel')
              }
              <ArrowNarrowLeft className='w-3 h-3 rotate-180' />
            </div>
          </div>
        </PortalToFollowElemContent>
      </div>
    </PortalToFollowElem>
  )
}

export default ModelParameterModal
