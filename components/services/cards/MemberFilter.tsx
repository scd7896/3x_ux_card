import { useState, useCallback, useEffect } from "react";
import { members } from "../../../lib/constant";

import styles from "./MemberFilter.module.css";

interface IProp {
	onChange?: (members: string[]) => void;
}

export default function MemberFilter({ onChange }: IProp) {
	const [selectedMembers, setSelectedMemebers] = useState<string[]>([]);

	const getSelected = useCallback(
		(member: string) => {
			return selectedMembers.find((it) => member === it) !== undefined;
		},
		[selectedMembers]
	);

	useEffect(() => {
		onChange?.(selectedMembers);
	}, [onChange, selectedMembers]);

	return (
		<section>
			{members.map((it) => (
				<button
					key={it}
					data-cy={it}
					className={`${styles.button} ${getSelected(it) ? styles.selected : ""}`}
					onClick={() => {
						setSelectedMemebers((prev) => {
							const findResult = prev.find((member) => it === member);
							if (findResult) {
								return prev.filter((member) => member !== findResult);
							}
							return [...prev, it];
						});
					}}
				>
					{it}
				</button>
			))}
		</section>
	);
}
