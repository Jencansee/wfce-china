import { useRef, useState, ReactNode, useEffect, PropsWithChildren, MutableRefObject } from 'react';
import { createPortal } from 'react-dom';


const ClientOnlyPortal = ({ children, selector }: { children: ReactNode, selector: string}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector(selector) as HTMLDivElement;
		setMounted(true);

	}, [selector]);

	return mounted ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;