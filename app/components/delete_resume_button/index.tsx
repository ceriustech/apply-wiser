import { useEffect, useState } from 'react';
import { usePuterStore } from '~/lib/puter';

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
		<div>
			<button
				className="bg-transparent border border-blue-500 text-black px-4 py-2 rounded-full cursor-pointer"
				onClick={() => handleDelete()}
			>
				X
			</button>
		</div>
	);
};

export default DeleteResumeButton;
