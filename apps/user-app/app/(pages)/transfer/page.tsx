import AddMoneyCard from "../../../components/AddMoneyCard";

export default function Transfer(){
    return(
        <div>
            <div className="text-3xl font-bold text-[#48059E] mb-6">
                Transfer
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 bg-white rounded">
                    <AddMoneyCard />
                </div>
                <div>
                    Other part
                </div>
            </div>
        </div>
    )
}