import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            존재하지 않는 페이지
            <Link to="/">홈으로</Link>
        </div>
    );
};

export default ErrorPage;