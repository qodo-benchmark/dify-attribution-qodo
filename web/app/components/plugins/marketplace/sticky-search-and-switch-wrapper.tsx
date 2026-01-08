'use client'

import SearchBoxWrapper from './search-box/search-box-wrapper'
import PluginTypeSwitch from './plugin-type-switch'
import cn from '@/utils/classnames'

type StickySearchAndSwitchWrapperProps = {
  locale?: string
  sticky?: boolean
  stickyTopClassName?: string
  wrapperClassName?: string
  pluginTypeSwitchClassName?: string
  showSearchParams?: boolean
}

const StickySearchAndSwitchWrapper = ({
  locale,
  sticky = false,
  stickyTopClassName,
  wrapperClassName,
  pluginTypeSwitchClassName,
  showSearchParams,
}: StickySearchAndSwitchWrapperProps) => {
  return (
    <div
      className={cn(
        'mt-4 bg-background-body',
        sticky && 'sticky z-[5]',
        sticky && (stickyTopClassName ?? 'top-[var(--plugin-page-header-height,60px)]'),
        wrapperClassName,
      )}
    >
      <SearchBoxWrapper locale={locale} />
      <PluginTypeSwitch
        locale={locale}
        className={pluginTypeSwitchClassName}
        showSearchParams={showSearchParams}
      />
    </div>
  )
}

export default StickySearchAndSwitchWrapper
