import BtnPrimary from '../../components/buttons/BtnPrimary/BtnPrimary';
import BtnLarge from '../../components/buttons/Large/BtnLarge';
import styles from './Main.module.css'
import BtnSmall from './../../components/buttons/Small/BtnSmall';
import Input from '../../components/forms/input/Input';
import Search from '../../components/forms/search/Search';
import Textarea from '../../components/forms/textarea/Textarea';
import MaterialItem from '../../components/Material/MaterialItem/MaterialItem';
import MaterialList from '../../components/Material/MaterialList/MaterialList';
import Title from '../../components/Title/Title';

const Main = () => {
  return(
    <div className={styles.test}>
      <Title>메인페이지</Title>
      <BtnLarge isFilled={false}>큰 버튼</BtnLarge>
      <BtnLarge isFilled={true}>큰 버튼</BtnLarge>
      <BtnSmall isFilled={false}>작은 버튼</BtnSmall>
      <BtnPrimary isFilled={false}>Primary 버튼</BtnPrimary>
      <Input title='성명' placeholder='성명'/> 
      <Search placeholder='원하시는 자재를 입력하세요'/>
      <Textarea placeholder='자재 설명 입력' title='자재'/>
      <MaterialItem />
      <MaterialList />
    </div>
  );
};

export default Main;