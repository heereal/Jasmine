import { useEffect, useRef } from "react";
import data from "../../../bookstore.json"

declare global {
	interface Window {
		kakao: any;
	}
}

export default function KaokaoMap () {

    const container = useRef(null);

    const handleMap = () => {

        let options = {
            center: new window.kakao.maps.LatLng(37.56839464, 126.9303023),
            level: 7
        };

        const map =new window.kakao.maps.Map(container.current, options);
    
        
        // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        // // 마커 이미지의 이미지 크기 입니다
        // var imageSize = new kakao.maps.Size(24, 35); 
        
        // // 마커 이미지를 생성합니다    
        // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
        data.forEach((store) => {
            new window.kakao.maps.Marker({
                map: map,
                title: store.FCLTY_NM,
                position: new window.kakao.maps.LatLng(store.FCLTY_LA, store.FCLTY_LO)
            })
        })

    };

    useEffect(()=> {
        handleMap();
    })

    return(
        <div ref={container} style={{width: 500, height: 500}}></div>
    )

};