!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(1),r=e=>{var t;const i=Array.from(document.getElementsByName(e)).find(e=>e.checked);return Number(null===(t=i)||void 0===t?void 0:t.value)||0};(()=>{const e=document.getElementById("searchBox"),t=document.getElementById("searchOutput"),i=document.getElementsByTagName("form")[0];let o;if(null==e)throw new Error("Search box not found!");if(null==t)throw new Error("Search output not found!");if(null==i)throw new Error("Form not found!");const c=()=>{const i=n.parseGoals(e.value.trim().split(/ +/g)),o={cauldron:r("cauldronThrall"),blacksmithBench:r("blacksmithThrall"),armorersBench:r("armorerThrall"),carpentersBench:r("carpenterThrall"),stove:r("stoveThrall"),tannery:r("tannerThrall"),furnace:r("furnaceThrall")};((e,t,i)=>{const r=n.findItemsRequired(e,i),{descriptions:o,totalDescriptions:c}=n.flattenRequirements(r);let a="";o.forEach((e,t)=>{const{level:i,count:n,item:r,duration:o}=e;for(let e=i;e>0;--e)a+="--";t>0&&0===i&&(a+="\n"),a+=`${i?" ":""}${n} ${r.name} (${o})\n`}),a+="\n",a+="## Item List ##\n",a+="\n",c.forEach(e=>{const{count:t,item:i,duration:n}=e;a+=`${t} ${i.name} (${n})\n`}),t.textContent=a})(i,t,o)};e.addEventListener("keyup",e=>{o&&clearTimeout(o),o=setTimeout(c,100)}),i.addEventListener("submit",e=>{e.preventDefault()}),i.addEventListener("change",e=>{c()})})()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(2),r=i(3),o=e=>Math.max(Math.floor(e),1);t.findItemsRequired=(e,i)=>e.map(({item:e,count:c})=>{const a=e.recipes[0],{craftStation:d,craftTime:s}=a,m=i[d]||0,u=n.findThrall({craftStation:d,tier:m});return{item:e,count:c,craftStation:d,craftTime:u?o(s-s/(u.speed+1)):s,requires:t.findItemsRequired(a.requires.map(e=>({item:r.itemMap[e.itemId],count:c*(u?o(e.count-e.count*u.cost):e.count)})),i)}});const c=({craftTime:e,count:t})=>{const i=e*t,n=i%60,r=Math.floor(i/60%60),o=Math.floor(i/60/60%24),c=Math.floor(i/60/60/24),a=[];return c&&a.push(String(c),"days"),o&&a.push(String(o),"hours"),r&&a.push(String(r),"minutes"),n&&a.push(String(n),"seconds"),a.join(" ")};t.parseGoals=e=>{const t=[];let i=1,n=[];e.forEach(e=>{/^\d+$/.test(e)?(n.length>0&&(t.push([i,n.join(" ")]),n=[]),i=parseInt(e)):n.push(e)}),n.length>0&&t.push([i,n.join(" ")]);const o=[];return t.forEach(e=>{e[1].toLowerCase();const t=e[1].replace(/ /g,"").split(""),i=r.itemList.find(t=>t.name.toLowerCase()===e[1]||t.aliases&&t.aliases.includes(e[1]))||r.itemList.find(e=>{const i=e.name.toLowerCase().split("");return i.length>=t.length&&t.every(e=>i.includes(e))});i&&o.push({count:e[0],item:i})}),o};const a=(e,t=[],i=0)=>{e.forEach((e,n)=>{const{count:r,item:o,craftTime:d,craftStation:s}=e,m=c({craftTime:d,count:r});t.push({level:i,count:r,item:o,duration:m,craftStation:s,craftTime:d}),a(e.requires,t,i+1)})};t.flattenRequirements=e=>{const t=[];a(e,t);const i={};return t.forEach(e=>{const{item:t}=e;null==i[t.id]&&(i[t.id]=Object.assign(Object.assign({},e),{count:0,level:0})),i[t.id].count+=e.count}),{descriptions:t,totalDescriptions:Object.values(i).sort((e,t)=>e.count-t.count).map(e=>{const{craftTime:t,count:i}=e;return e.duration=c({craftTime:t,count:i}),e})}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.thrallMap={cauldron:[{tier:1,speed:.5,cost:0},{tier:2,speed:1,cost:.25},{tier:3,speed:1.5,cost:.25},{tier:4,speed:2,cost:.5},{tier:5,speed:3,cost:.5}],blacksmithBench:[{tier:1,speed:.5,cost:0},{tier:2,speed:1,cost:.25},{tier:3,speed:1.5,cost:.25},{tier:4,speed:2,cost:.5},{tier:5,speed:2,cost:.5}],armorersBench:[{tier:1,speed:.5,cost:0},{tier:2,speed:1,cost:.25},{tier:3,speed:1.5,cost:.25},{tier:4,speed:2,cost:.5},{tier:5,speed:3,cost:.5}],carpentersBench:[{tier:1,speed:.5,cost:0},{tier:2,speed:1,cost:.25},{tier:3,speed:1.5,cost:.25},{tier:4,speed:2,cost:.5},{tier:5,speed:2,cost:.5}],stove:[{tier:1,speed:.5,cost:0},{tier:2,speed:1,cost:0},{tier:3,speed:1.5,cost:0},{tier:4,speed:2,cost:0},{tier:5,speed:2,cost:0}],tannery:[{tier:1,speed:.5,cost:0},{tier:2,speed:1,cost:0},{tier:3,speed:1.5,cost:0},{tier:4,speed:2,cost:0},{tier:5,speed:3,cost:0}],furnace:[{tier:1,speed:.5,cost:0},{tier:2,speed:1,cost:0},{tier:3,speed:1.5,cost:0},{tier:4,speed:2,cost:0},{tier:5,speed:3,cost:0}]},Object.freeze(t.thrallMap),Object.values(t.thrallMap).forEach(e=>{Object.freeze(e)}),t.findThrall=({craftStation:e,tier:i})=>(t.thrallMap[e]||[]).find(e=>e.tier===i)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(4),r=i(5),o=i(6),c=i(7),a=i(8),d=i(9),s=i(10);t.itemList=[].concat(a.plantPartList,o.hideItemList,r.creaturePartList,s.woodItemList,c.mineralList,n.buildingPieceList,d.siegeItemList),t.itemMap={},t.itemList.forEach(e=>{if(null!=t.itemMap[e.id])throw new Error("Duplicate item ID: "+e.id);t.itemMap[e.id]=e,Object.freeze(e),Object.freeze(e.recipes),Object.values(e.recipes).forEach(e=>{Object.freeze(e),Object.freeze(e.requires),Object.values(e.requires).forEach(e=>{Object.freeze(e)})})}),Object.freeze(t.itemList),Object.freeze(t.itemMap),t.itemList.forEach(e=>{e.recipes.forEach(e=>{e.requires.forEach(e=>{if(null==t.itemMap[e.itemId])throw new Error("Required ID missing: "+e.itemId+"\n")})})})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildingPieceList=[{id:"blackIceReinforcedWoodenCeiling",name:"Black Ice-Reinforced Wooden Ceiling",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:3},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:9}]}]},{id:"blackIceReinforcedWoodenDoor",name:"Black Ice-Reinforced Wooden Door",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:15}]}]},{id:"blackIceReinforcedWoodenDoorframe",name:"Black Ice-Reinforced Wooden Doorframe",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedWoodenFoundation",name:"Black Ice-Reinforced Wooden Foundation",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:15}]}]},{id:"blackIceReinforcedWoodenPillar",name:"Black Ice-Reinforced Wooden Pillar",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"tiledSlopedBlackIceReinforcedWoodenRoof",name:"Tiled Sloped Black Ice-Reinforced Wooden Roof",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:3},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:9}]}]},{id:"blackIceReinforcedWoodenWedge",name:"Black Ice-Reinforced Wooden Wedge",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedWoodenWedgeFoundation",name:"Black Ice-Reinforced Wooden Wedge Foundation",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:14}]}]},{id:"invertedTiledWedgeBlackIceReinforcedWoodenSlopedRoof",name:"Inverted Tiled Wedge Black Ice-Reinforced Wooden Sloped Roof",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:3},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:9}]}]},{id:"tiledWedgeBlackIceReinforcedWoodenSlopedRoof",name:"Tiled Wedge Black Ice-Reinforced Wooden Sloped Roof",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:3},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:9}]}]},{id:"blackIceReinforcedWoodenWall",name:"Black Ice-Reinforced Wooden Wall",aliases:["black ice wall"],recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"leftSlopingBlackIceReinforcedWoodenWall",name:"Left-sloping Black Ice-Reinforced Wooden Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"rightSlopingBlackIceReinforcedWoodenWall",name:"Right-sloping Black Ice-Reinforced Wooden Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedWoodenFrame",name:"Black Ice-Reinforced Wooden Frame",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedSlopedRoofCorner",name:"Black Ice-Reinforced Sloped Roof Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"invertedBlackIceReinforcedSlopedRoofCorner",name:"Interted Black Ice-Reinforced Sloped Roof Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"leftSlopingInvertedBlackIceReinforcedWoodenWall",name:"Left-sloping Inverted Black Ice-Reinforced Wooden Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"rightSlopingInvertedBlackIceReinforcedWoodenWall",name:"Right-sloping Inverted Black Ice-Reinforced Wooden Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedWoodenFence",name:"Black Ice-Reinforced Wooden Fence",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedWoodenFenceFoundation",name:"Black Ice-Reinforced Wooden Fence Foundation",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:3},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:12}]}]},{id:"blackIceReinforcedWoodenStairsRail",name:"Black Ice-Reinforced Wooden Stairs (rail)",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:15}]}]},{id:"blackIceReinforcedWoodenStairs",name:"Black Ice-Reinforced Wooden Stairs",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:15}]}]},{id:"blackIceReinforcedWoodenStairsCorner",name:"Black Ice-Reinforced Wooden Stairs Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:15}]}]},{id:"blackIceReinforcedRamp",name:"Black Ice-Reinforced Ramp",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedRampCorner",name:"Black Ice-Reinforced Ramp Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:2},{itemId:"blackIce",count:8}]}]},{id:"blackIceReinforcedHatchFrame",name:"Black Ice-Reinforced Hatch Frame",aliases:["black ice hatch frame"],recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:2},{itemId:"steelReinforcement",count:1},{itemId:"blackIce",count:5}]}]},{id:"blackIceReinforcedHatchDoor",name:"Black Ice-Reinforced Hatch Door",aliases:["black ice hatch"],recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:8},{itemId:"twine",count:5}]}]},{id:"blackIceReinforcedWoodenGate",name:"Black Ice-Reinforced Wooden Gate",aliases:["black ice gate"],recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:15}]}]},{id:"blackIceReinforcedWoodenGateway",name:"Black Ice-Reinforced Wooden Gateway",aliases:["black ice gateway"],recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"insulatedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"blackIce",count:15}]}]},{id:"heavyReinforcedDoorA",name:"Heavy Reinforced Door (Variant A)",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"heavyReinforcedDoorB",name:"Heavy Reinforced Door (Variant B)",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"steelReinforcement",count:6}]}]},{id:"heavyReinforcedDoorC",name:"Heavy Reinforced Door (Variant C)",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"reinforcedStoneFoundation",name:"Reinforced Stone Foundation",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:15},{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"reinforcedStoneCeiling",name:"Reinforced Stone Ceiling",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:9},{itemId:"shapedWood",count:3},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneWall",name:"Reinforced Stone Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneFrame",name:"Reinforced Stone Frame",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneDoorframe",name:"Reinforced Stone Doorframe",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStonePillar",name:"Reinforced Stone Pillar",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneWedge",name:"Reinforced Stone Wedge",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneWedgeFoundation",name:"Reinforced Stone Wedge Foundation",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"invertedTiledWedgeSlopedRoof",name:"Inverted Tiled Wedge Sloped Roof",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"tiledWedgeSlopedRoof",name:"Tiled Wedge Sloped Roof",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:9},{itemId:"shapedWood",count:3},{itemId:"steelReinforcement",count:2}]}]},{id:"tiledSlopedRoof",name:"Tiled Sloped Roof",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:14},{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"leftSlopingReinforcedStoneWall",name:"Left Sloping Reinforced Stone Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:9},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"rightSlopingReinforcedStoneWall",name:"Right Sloping Reinforced Stone Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:9},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedWoodenRooftopCap",name:"Reinforced Wooden Rooftop Cap",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:3}]}]},{id:"reinforcedWoodenRooftopIntersection",name:"Reinforced Wooden Rooftop Intersection",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedWoodenSlopedRoofCorner",name:"Reinforced Wooden Sloped Roof Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"invertedReinforcedWoodenSlopedRoofCorner",name:"Inverted Reinforced Wooden Sloped Roof Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"leftSlopingInvertedReinforcedStoneWall",name:"Left-sloping Inverted Reinforced Stone Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:9},{itemId:"shapedWood",count:3},{itemId:"steelReinforcement",count:2}]}]},{id:"rightSlopingInvertedReinforcedStoneWall",name:"Right-sloping Inverted Reinforced Stone Wall",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:9},{itemId:"shapedWood",count:3},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneFence",name:"Reinforced Stone Fence",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneFenceFoundation",name:"Reinforced Stone Fence Foundation",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:12},{itemId:"shapedWood",count:3},{itemId:"steelReinforcement",count:3}]}]},{id:"reinforcedStoneStairsRail",name:"Reinforced Stone Stairs (rail)",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:15},{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"reinforcedStoneStairsCorner",name:"Reinforced Stone Stairs Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:15},{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"reinforcedStoneStairs",name:"Reinforced Stone Stairs",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:15},{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"reinforcedStoneRamp",name:"Reinforced Stone Ramp",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneRampCorner",name:"Reinforced Stone Ramp Corner",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:8},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedStoneHatchFrame",name:"Reinforced Stone Hatch Frame",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:5},{itemId:"shapedWood",count:2},{itemId:"steelReinforcement",count:2}]}]},{id:"reinforcedHatchDoorA",name:"Reinforced Hatch Door (Variant A)",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"steelReinforcement",count:6},{itemId:"twine",count:5}]}]},{id:"reinforcedHatchDoorB",name:"Reinforced Hatch Door (Variant B)",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3},{itemId:"twine",count:5}]}]},{id:"reinforcedStoneGateway",name:"Reinforced Stone Gateway",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:30},{itemId:"shapedWood",count:8},{itemId:"steelReinforcement",count:6}]}]},{id:"reinforcedStoneGate",name:"Reinforced Stone Gate",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:15},{itemId:"shapedWood",count:4},{itemId:"steelReinforcement",count:3}]}]},{id:"drawbridge",name:"Drawbridge",recipes:[{craftStation:"byHand",craftTime:5,requires:[{itemId:"hardenedBrick",count:30},{itemId:"shapedWood",count:20},{itemId:"steelReinforcement",count:6},{itemId:"twine",count:10}]}]}]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.creaturePartList=[{id:"unappetizingFish",name:"Unappetizing Fish",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"volatileGland",name:"Volatile Gland",recipes:[{craftStation:"gather",craftTime:60,requires:[]}]},{id:"demonBlood",name:"Demon Blood",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"ichor",name:"Ichor",recipes:[{craftStation:"stove",craftTime:5,requires:[{itemId:"unappetizingFish",count:3}]}]}]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hideItemList=[{id:"hide",name:"Hide",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"tar",name:"Tar",recipes:[{craftStation:"tannery",craftTime:10,requires:[{itemId:"hide",count:3}]}]}]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mineralList=[{id:"stone",name:"Stone",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"ironOre",name:"Iron Ore",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"brimstone",name:"Brimstone",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"crystal",name:"Crystal",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"blackIce",name:"Black Ice",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"brick",name:"Brick",recipes:[{craftStation:"furnace",craftTime:10,requires:[{itemId:"stone",count:10}]}]},{id:"stoneConsolidant",name:"Stone Consolidant",recipes:[{craftStation:"cauldron",craftTime:10,requires:[{itemId:"ichor",count:2},{itemId:"twine",count:2}]}]},{id:"hardenedBrick",name:"Hardended Brick",recipes:[{craftStation:"furnace",craftTime:15,requires:[{itemId:"brick",count:1},{itemId:"stoneConsolidant",count:1}]}]},{id:"glass",name:"Glass",recipes:[{craftStation:"furnace",craftTime:10,requires:[{itemId:"crystal",count:2}]}]},{id:"steelFire",name:"Steel Fire",recipes:[{craftStation:"cauldron",craftTime:20,requires:[{itemId:"tar",count:2},{itemId:"brimstone",count:1}]}]},{id:"ironBar",name:"Iron Bar",recipes:[{craftStation:"furnace",craftTime:10,requires:[{itemId:"ironOre",count:2}]}]},{id:"ironReinforcement",name:"Iron Reinforcement",recipes:[{craftStation:"blacksmithBench",craftTime:30,requires:[{itemId:"ironBar",count:2}]}]},{id:"steelBar",name:"Steel Bar",recipes:[{craftStation:"furnace",craftTime:15,requires:[{itemId:"ironBar",count:5},{itemId:"steelFire",count:1}]}]},{id:"steelReinforcement",name:"Steel Reinforcement",recipes:[{craftStation:"blacksmithBench",craftTime:60,requires:[{itemId:"steelBar",count:2}]}]}]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.plantPartList=[{id:"plantFiber",name:"Plant Fiber",recipes:[{craftStation:"gather",craftTime:1,requires:[]}]},{id:"twine",name:"Twine",recipes:[{craftStation:"armorersBench",craftTime:3,requires:[{itemId:"plantFiber",count:3}]}]}]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.siegeItemList=[{id:"siegeFoundation",name:"Siege Foundation",recipes:[{craftStation:"carpentersBench",craftTime:30,requires:[{itemId:"shapedWood",count:30},{itemId:"brick",count:25},{itemId:"ironReinforcement",count:15}]}]},{id:"trebuchetBase",name:"Trebuchet Base",recipes:[{craftStation:"carpentersBench",craftTime:30,requires:[{itemId:"wood",count:500},{itemId:"stone",count:150}]}]},{id:"trebuchetFrame",name:"Trebuchet Frame",recipes:[{craftStation:"trebuchet",craftTime:1800,requires:[{itemId:"wood",count:500},{itemId:"stone",count:150}]}]},{id:"trebuchetArm",name:"Trebuchet Arm",recipes:[{craftStation:"trebuchet",craftTime:1800,requires:[{itemId:"wood",count:300},{itemId:"ironReinforcement",count:13},{itemId:"twine",count:20}]}]},{id:"trebuchet",name:"Trebuchet",recipes:[{craftStation:"byHand",craftTime:30,requires:[{itemId:"siegeFoundation",count:1},{itemId:"trebuchetBase",count:1},{itemId:"trebuchetFrame",count:1},{itemId:"trebuchetArm",count:1}]}]},{id:"siegeBoulder",name:"Siege Boulder",recipes:[{craftStation:"trebuchet",craftTime:10,requires:[{itemId:"stone",count:250}]}]},{id:"demonFireBarrage",name:"Demon-fire Barrage",recipes:[{craftStation:"trebuchet",craftTime:20,requires:[{itemId:"explosiveJar",count:2},{itemId:"twine",count:10}]}]},{id:"dragonPowder",name:"Dragonpowder",recipes:[{craftStation:"cauldron",craftTime:60,requires:[{itemId:"demonBlood",count:2},{itemId:"brimstone",count:10},{itemId:"crystal",count:50},{itemId:"steelFire",count:100}]}]},{id:"earthenwareJug",name:"Earthenware Jug",recipes:[{craftStation:"artisansWorktable",craftTime:5,requires:[{itemId:"stone",count:50}]}]},{id:"explosiveJar",name:"Explosive Jar",recipes:[{craftStation:"byHand",craftTime:10,requires:[{itemId:"earthenwareJug",count:1},{itemId:"tar",count:5},{itemId:"dragonPowder",count:1}]}]},{id:"glassFlask",name:"Glass Flask",recipes:[{craftStation:"furnace",craftTime:10,requires:[{itemId:"glass",count:3}]}]},{id:"waterFilledGlassFlask",name:"Water-filled Glass Flask",recipes:[{craftStation:"cauldron",craftTime:2,requires:[{itemId:"glassFlask",count:1}]}]},{id:"waterOrb",name:"Water Orb",recipes:[{craftStation:"cauldron",craftTime:30,requires:[{itemId:"waterFilledGlassFlask",count:1},{itemId:"ichor",count:1}]}]},{id:"demonFireOrb",name:"Demon-fire Orb",recipes:[{craftStation:"cauldron",craftTime:60,requires:[{itemId:"waterOrb",count:1},{itemId:"volatileGland",count:5}]}]}]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.woodItemList=[{id:"wood",name:"Wood",recipes:[{craftStation:"gather",craftTime:.5,requires:[]}]},{id:"dryWood",name:"Dry Wood",recipes:[{craftStation:"dryer",craftTime:40,requires:[{itemId:"wood",count:.5}]}]},{id:"resin",name:"Resin",recipes:[{craftStation:"dryer",craftTime:40,requires:[{itemId:"wood",count:1}]}]},{id:"shapedWood",name:"Shaped Wood",recipes:[{craftStation:"carpentersBench",craftTime:10,requires:[{itemId:"wood",count:10}]}]},{id:"insulatedWood",name:"Insulated Wood",recipes:[{craftStation:"carpentersBench",craftTime:10,requires:[{itemId:"dryWood",count:1},{itemId:"resin",count:2}]}]}]}]);
//# sourceMappingURL=ccc.js.map