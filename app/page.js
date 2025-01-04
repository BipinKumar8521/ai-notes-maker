"use client";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect } from "react";

export default function Home() {
	const { user } = useUser();
	const createUser = useMutation(api.user.createUser);

	useEffect(() => {
		user && checkUser();
	}, [user]);

	const checkUser = async () => {
		const result = await createUser({
			email: user?.primaryEmailAddress?.emailAddress,
			userName: user?.fullName,
			imageUrl: user?.imageUrl,
		});
		console.log(result);
	};
	return (
		<div>
			<h1>Hello from Next js</h1>
		</div>
	);
}
