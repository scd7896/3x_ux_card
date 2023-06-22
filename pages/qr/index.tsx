import { MouseEvent, useCallback, useRef } from "react";
import QRCode from "react-qr-code";
import { Col, Row } from "../../components/layout/Layout";
import useCardList from "../../hooks/cards/useCardList";
import { checkUrlByHtml } from "../../lib/url";
import UXCardview from "../../components/Card/UXCardview";
import styles from "./styles.module.css";

export default function QRPage() {
	const listRef = useRef<HTMLDivElement>(null);
	const { cards } = useCardList();

	const onQrClick = useCallback((e: MouseEvent<SVGSVGElement>, name: string) => {
		const svg = e.currentTarget;
		const svgData = new XMLSerializer().serializeToString(svg);
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const img = new Image();
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx?.drawImage(img, 0, 0);
			const pngFile = canvas.toDataURL("image/png");
			const downloadLink = document.createElement("a");
			downloadLink.download = name;
			downloadLink.href = `${pngFile}`;
			downloadLink.click();
		};
		img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
	}, []);

	return (
		<div>
			<Row ref={listRef}>
				{cards?.map((card) => {
					const value = checkUrlByHtml(`${location.origin}/posts/${card.id}`, "production");
					return (
						<Col col={3} className={styles.cards}>
							<UXCardview {...card} />
							<QRCode onClick={(e) => onQrClick(e, card.title)} className={styles.qr} value={value} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
}
