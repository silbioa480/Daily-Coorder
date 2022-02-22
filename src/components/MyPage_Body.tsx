type Props = {
    children: React.ReactNode;
  };
  

function MyPage_Body({ children }: Props){
    return(
        <>
            {children}
        </>
    );
}

export default MyPage_Body;