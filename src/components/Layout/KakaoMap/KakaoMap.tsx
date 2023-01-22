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

        // 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성
        var zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    
        // 마커 이미지 생성   
        var imageSrc = "https://user-images.githubusercontent.com/117061017/213868546-c26efb7b-3288-436c-a937-a10780b34cfb.png"; 
        var imageSize = new window.kakao.maps.Size(30, 30); 
        var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
    
        // 마커 여러 개 표시하기
        data.forEach((store) => {
            const marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                title: store.FCLTY_NM, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
                position: new window.kakao.maps.LatLng(store.FCLTY_LA, store.FCLTY_LO), // 마커를 표시할 위치(위도, 경도)
                clickable: true,
                image: markerImage // 커스텀 마커 이미지 설정
            })

            // 마커 클릭 이벤트
            window.kakao.maps.event.addListener(marker, 'click', function() {
                //TODO: 클릭한 마커의 위도, 경도 데이터를 어떻게 얻어 올 것인지?
                // 정 안되면 서점 이름으로 find 돌려서 위도, 경도 가져올 수도 있음
                const  moveLatLon = new window.kakao.maps.LatLng(33.450580, 126.574942);
                // const markerOffset = new window.kakao.maps.Point(OFFSET_X, OFFSET_Y) // 기본, 클릭 마커의 기준좌표
                // let options = {
                //     center: new window.kakao.maps.LatLng(37.56839464, 126.9303023), // 지도의 중심 좌표
                //     level: 10 // 지도의 확대 수준
                // };
                // var latlng = mouseEvent.latLng; 
                // var latlng = marker.latLng; 
                

                // const  moveLatLon = new window.kakao.maps.LatLng(latlng.getLat(), latlng.getLng());

    
                // 지도 중심을 부드럽게 이동시킵니다
                // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
                map.panTo(moveLatLon);  
                // console.log(marker)
            });
        })

        

    };

    
        
  

    // 지도 이동하기
    // function panTo() {
    //     // 이동할 위도 경도 위치를 생성합니다 
    //     var moveLatLon = new window.kakao.maps.LatLng(33.450580, 126.574942);
        
    //     // 지도 중심을 부드럽게 이동시킵니다
    //     // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    //     // map.panTo(moveLatLon);            
    // }        

    useEffect(()=> {
        handleMap();
    })

    return(
        <div ref={container} style={{width: 500, height: 500}}></div>
    )
};