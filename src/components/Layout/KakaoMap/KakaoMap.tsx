import { useEffect, useRef } from "react";
import data from "../../../bookstore.json"

// kakao 객체를 window 객체의 interface로 추가 -> window.kakao로 사용
declare global {
	interface Window {
		kakao: any;
	}
}

export default function KaokaoMap () {

    // 지도가 표시될 HTML element
    const container = useRef(null);

    // 카카오 지도 생성하기, 마커 표시하기
    const handleMap = () => {

        // 지도를 생성할 때 필요한 기본 옵션
        let options = {
            center: new window.kakao.maps.LatLng(37.56839464, 126.9303023), // 지도의 중심 좌표
            level: 10 // 지도의 확대 수준
        };

        // 지도를 표시할 div와 지도 옵션으로 지도를 생성함
        const map = new window.kakao.maps.Map(container.current, options); 
    
        
        // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        // // 마커 이미지의 이미지 크기 입니다
        // var imageSize = new kakao.maps.Size(24, 35); 
        // // 마커 이미지를 생성합니다    
        // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
        // 마커 여러 개 표시하기
        data.forEach((store) => {
            new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                title: store.FCLTY_NM, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
                position: new window.kakao.maps.LatLng(store.FCLTY_LA, store.FCLTY_LO) // 마커를 표시할 위치(위도, 경도)
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