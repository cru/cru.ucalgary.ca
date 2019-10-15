import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop'
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar'
import { faPoll } from '@fortawesome/free-solid-svg-icons/faPoll'

library.add(
  faCaretDown,
  faExternalLinkAlt,
  faEnvelope,
  faPhone,
  faCode,
  faLaptop,
  faChartBar,
  faPoll
)

config.autoAddCss = false
