import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import SearchModal from "@/app/components/modals/SearchModal";


const ModalsProvider = () => {
  return ( 
    <>
     <RegisterModal/>
     <LoginModal/>
     <SearchModal/>
     <RentModal/>

    </>
   );
}
 
export default ModalsProvider;