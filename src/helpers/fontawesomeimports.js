import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'

library.add(faCaretDown, faExternalLinkAlt, faEnvelope, faPhone, faFilter)

config.autoAddCss = false
