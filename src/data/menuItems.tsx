import { MenuItem } from "../interfaces/appInterface";

export const menuItems:MenuItem[]=[
    {
        name:'Animation 101',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 102',
        icon:'albums-outline',
        component:'Animation102Screen'
    },
    {
        name:'Switches',
        icon:'toggle-outline',
        component:'SwitchScreen'
    },
    {
        name:'Alerts',
        icon:'alert-circle-outline',
        component:'AlertScreen'
    },
    {
        name:'TextInputs',
        icon:'document-text-outline',
        component:'TextInputScreen'
    },
    {
        name:'PullToRefresh',
        icon:'refresh-outline',
        component:'PullToRefreshScreen'
    },
    {
        name:'Section List',
        icon:'list-outline',
        component:'CustomSectionListScreen'
    },
    {
        name:'Modal Screen',
        icon:'copy-outline',
        component:'ModalScreen'
    },
    {
        name:'Infinite Scroll',
        icon:'download-outline',
        component:'InfiniteScrollScreen'
    },
    
]