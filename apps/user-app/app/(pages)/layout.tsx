import SidebarItem from "../../components/SideBarItem";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
        <div className="grid grid-cols-5 gap-4 h-screen">
            <div className="col-span-1 border-r pt-14 flex justify-center">
                <div>
                    <div className="hover:bg-gray-200">
                        <SidebarItem href="/dashboard" icon={<HomeIcon />} title="Home" />
                    </div>
                    <div className="hover:bg-gray-200">
                        <SidebarItem href="/transfer" icon={<TransferIcon />} title="Transfer" />
                    </div>
                    <div className="hover:bg-gray-200">
                        <SidebarItem href="/transactions" icon={<TransactionsIcon />} title="Transactions" />
                    </div>
                </div>
                    </div>
                    <div className="col-span-4">
                        {children}
                    </div>
        </div>
  );
}

const HomeIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
    )
}

const TransferIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
    )
}
const TransactionsIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>    
    )
}