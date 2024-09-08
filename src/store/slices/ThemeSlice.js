import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeMode: 'light',
    activeLanguage: 'en',
    isSidebarCollapse: false,
    isMiniSidebar: false,
    isMiniSidebarHover: false,
    sidebarWidth: 270,
    miniSidebarWidth: 0,
    toolbarHeight: 70,
    isPosLayout: false,
};

export const ThemeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
       setActiveLanguage: (state, action) => {
           state.activeLanguage = action.payload;
       },
       setThemeMode: (state) => {
           console.log('Action', state.activeMode);

           state.activeMode = state.activeMode === 'light' ? 'dark' : 'light';
       },
       setSidebarCollapse: (state, action) => {
            state.isSidebarCollapse = action.payload ?? !state.isSidebarCollapse;
       },
       setIsMiniSidebar: (state, action) => {
           state.miniSidebarWidth = 80;
            state.isMiniSidebar = action.payload ?? !state.isMiniSidebar;
       },
       setMiniSidebarHover: (state, action) => {
            state.isMiniSidebarHover = action.payload;
       },
       setIsPosLayout: state => {
           console.log('Pos Layout', state.isPosLayout);
           state.isPosLayout = !state.isPosLayout;
       }
   }
});

export const {
    setActiveLanguage,
    setMiniSidebar,
    setThemeMode,
    setSidebarCollapse,
    setIsMiniSidebar,
    setMiniSidebarHover
} = ThemeSlice.actions;

export default ThemeSlice;
