import React, { useEffect } from "react"
import { Icon, Item, Wrap, Text} from "./styles"
import user from '../../../../assets/user.png';
import bookmark from '../../../../assets/bookmark.png';
import setting from '../../../../assets/settings.png';
import alertCircle from '../../../../assets/alert-circle.png';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../../recoil/home";
const Dropdown = () => {
  const [,setSideBar] = useRecoilState(sidebarState);
  const handleOutsideClick = (e: MouseEvent) => {
    if (!e.target || !(e.target instanceof HTMLElement) || !e.target.closest('.dropdown')) {
      setSideBar(false); // 입력 창 밖을 클릭하면 dropdown 메뉴를 숨김
    }
};
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (<Wrap onClick={()=>{setSideBar(false)}} className="dropdown" >
    <Item>
      <Icon src = {user}></Icon>
      <Text>프로필</Text>
    </Item>
    <Item>
    <Icon src = {bookmark}></Icon>
    <Text>저장됨</Text>
    </Item>
    <Item>
    <Icon src = {setting}></Icon>
    <Text>설정</Text>
    </Item>
    <Item>
    <Icon src = {alertCircle}></Icon>
    <Text>문제 신고</Text>
    </Item>
    <Item>
    <Icon src = {setting}></Icon>
    <Text>로그아웃</Text>
    </Item>
  </Wrap>)
}
export default Dropdown;