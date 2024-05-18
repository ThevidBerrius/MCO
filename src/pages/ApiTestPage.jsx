import { useBackend } from "../data/useBackend";

const ApiTestPage = () => {
    const { InsertCoachOrder } = useBackend();
    return (
        <div>
            <button className="test-api" onClick={

                async () => {
                    console.log(await InsertCoachOrder())
                }
            }>
                Test API Now
            </button>
        </div >
    );
}

export default ApiTestPage;