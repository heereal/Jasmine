import { useEffect, useRef } from "react";

declare global {
	interface Window {
		kakao: any;
	}
}

export default function KaokaoMap () {

    const container = useRef(null);
    let options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

    useEffect(()=> {
        new window.kakao.maps.Map(container.current, options);
    })

    return(
        <div ref={container} style={{width: 500, height: 500}}></div>
    )

};