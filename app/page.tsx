import BodyComponent from "./components/BodyComponent";
import Header from "./components/Header";
import UserSidebar from "./components/UserSideBar";
 
export default function Home() {
 
	return (
		<div className="w-full max-w-[1280px] mx-auto p-[16px]">
			<Header />
			<div className="flex gap-[24px] w-full">
				<UserSidebar />
				<BodyComponent />
			</div>
		</div>
	);
}