import { useEffect, useState } from 'react';
import { usePuterStore } from '~/lib/puter';

import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteResumeButton = () => {
	const { fs, kv } = usePuterStore();
	const [files, setFiles] = useState<FSItem[]>([]);

	const loadFiles = async () => {
		const files = (await fs.readDir('./')) as FSItem[];
		setFiles(files);
	};

	useEffect(() => {
		loadFiles();
	}, []);

	const handleDelete = async () => {
		for (const file of files) {
			await fs.delete(file.path);
		}
		await kv.flush();
		await loadFiles();
	};

	return (
		<div className='flex flex-row '>
			<button className="cursor-pointer" onClick={() => handleDelete()}>
				<FaRegTrashAlt />
			</button>
		</div>
	);
};

export default DeleteResumeButton;
