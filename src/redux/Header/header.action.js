import headerTypes from './header.types'

export const setHeaderMobileMenu = (mobileToggle) => ({
    type: headerTypes.SET_HEADER_MOBILE_MENU,
    payload: mobileToggle
})