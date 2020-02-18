import { User } from './User';
import { Company } from './Company';

import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

// passed in user class with property location:{lat:number;lng:number}
// which will automatically satisfy the interface from CustomMap.ts
// the interface just wants to have their structure implmeneted
// implicit check = typescript will automatically check types behind the scenes
customMap.addMarker(user);
customMap.addMarker(company);
