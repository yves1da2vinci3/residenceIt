import {atom} from 'recoil'
const RefreshTableAtom = atom({
    key: 'refresh', // unique ID (with respect to other atoms/selectors)
    default: 0.1 , // valeur par défaut (alias valeur initials)
  });

  export default RefreshTableAtom