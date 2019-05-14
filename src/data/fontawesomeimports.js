import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"

library.add(faCaretDown, faExternalLinkAlt, faEnvelope, faPhone)

config.autoAddCss = false
