import { combineReducers } from "@reduxjs/toolkit";
import authSliceScreen from "@/app/store/slices/auth-slice/login_slice"
import logoSliceScreen from "@/app/store/slices/home_page_slice/logo_slice"
import navbarSliceScreen from '@/app/store/slices/home_page_slice/navbar_slice'
import footerSliceScreen from '@/app/store/slices/home_page_slice/footer_slice';
import bannerSliceScreen from '@/app/store/slices/home_page_slice/banner_slice'
import projectListSliceScreen from '@/app/store/slices/general_slice/project_list_slice'
import searchSliceScreen from '@/app/store/slices/search_slice/search_slice'
import aboutUsShortInfoSliceScreen from '@/app/store/slices/home_page_slice/about_us_short_info_slice'
import categoryListSliceScreen from '@/app/store/slices/home_page_slice/category_list_slice'
import microSiteLinkListSliceScreen from '@/app/store/slices/home_page_slice/micro_site_link_slice'
import popularTagSliceScreen from '@/app/store/slices/home_page_slice/popular_tag_slice'
import SignUpUserAccessTokenSlice from '@/app/store/slices/auth-slice/signup_user_access_token_slice'
import whatsAppDetailSliceScreen from '@/app/store/slices/home_page_slice/whats_app_slice'
import authGoogleSliceScreen from "@/app/store/slices/auth-slice/google_login_slice"
import AudioVideoListSliceScreen from "@/app/store/slices/media_slice/audio_video_list_slice"
import AudioDetailsSliceScreen from "@/app/store/slices/media_slice/audio_details_slice"
import PublicationPrintMediaListSliceScreen from "@/app/store/slices/home_page_slice/publication_print_media_list_slice";
import playerSlice from "@/app/store/slices/media_slice/playerSlice";

const appReducer = combineReducers({
  authSliceScreen: authSliceScreen,
  logo: logoSliceScreen,
  navbar: navbarSliceScreen,
  banner: bannerSliceScreen,
  footer: footerSliceScreen,
  projectList: projectListSliceScreen,
  search: searchSliceScreen,
  aboutUsShortInfo: aboutUsShortInfoSliceScreen,
  categoryList: categoryListSliceScreen,
  microSiteLinkList: microSiteLinkListSliceScreen,
  popularTag: popularTagSliceScreen,
  SignUpUserAccessToken: SignUpUserAccessTokenSlice,
  whatsAppDetail: whatsAppDetailSliceScreen,
  authGoogleSliceScreen: authGoogleSliceScreen,
  audioVideoList:AudioVideoListSliceScreen,
  audioDetails:AudioDetailsSliceScreen,
  publicationPrintMediaList: PublicationPrintMediaListSliceScreen,
  audioPlayer: playerSlice,

});

const rootReducer = (state: any, action: any) => {
  if (action.type === "Login/LogoutSuccess") {
    state = undefined;

    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
