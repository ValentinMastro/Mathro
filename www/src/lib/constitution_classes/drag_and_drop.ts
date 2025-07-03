export interface DropzoneOptions<T = any> {
	on_dropzone: (data: T, event: DragEvent) => void;
	dropEffect?: 'move' | 'copy' | 'link' | 'none';
	dragover_class?: string;
}

export function draggable<T>(node: HTMLElement, data: T) {
	let state = data;

	node.draggable = true;
	node.style.cursor = 'move';

	function handle_dragstart(event: DragEvent) {
		if (event.dataTransfer) {
			event.dataTransfer.setData('application/json', JSON.stringify(state));
			event.dataTransfer.effectAllowed = 'move';
			node.classList.add('dragging');
		}
	}

	function handle_dragend() {
		node.classList.remove('dragging');
	}

	node.addEventListener('dragstart', handle_dragstart);
	node.addEventListener('dragend', handle_dragend);

	return {
		update(new_data: T) {
			state = new_data;
		},
		destroy() {
			node.removeEventListener('dragstart', handle_dragstart);
			node.removeEventListener('dragend', handle_dragend);
		}
	};
}

export function dropzone<T>(node: HTMLElement, options: DropzoneOptions<T>) {
	let state: DropzoneOptions<T> = {
		dropEffect: 'move',
		dragover_class: 'droppable',
		...options
	};

	function handle_dragenter(event: DragEvent) {
		node.classList.add(state.dragover_class!);
	}

	function handle_dragleave(event: DragEvent) {
		node.classList.remove(state.dragover_class!);
	}

	function handle_dragover(event: DragEvent) {
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = state.dropEffect!;
		}
	}

	function handle_drop(event: DragEvent) {
		event.preventDefault();
		node.classList.remove(state.dragover_class!);
		try {
			const raw = event.dataTransfer?.getData('application/json');
			if (raw) {
				const data = JSON.parse(raw) as T;
				state.on_dropzone(data, event);
			}
		} catch (e) {
			console.error('Erreur lors du parsing du drop:', e);
		}
	}

	node.addEventListener('dragenter', handle_dragenter);
	node.addEventListener('dragleave', handle_dragleave);
	node.addEventListener('dragover', handle_dragover);
	node.addEventListener('drop', handle_drop);

	return {
		update(new_options: DropzoneOptions<T>) {
			state = {
				dropEffect: 'move',
				dragover_class: 'droppable',
				...new_options
			};
		},
		destroy() {
			node.removeEventListener('dragenter', handle_dragenter);
			node.removeEventListener('dragleave', handle_dragleave);
			node.removeEventListener('dragover', handle_dragover);
			node.removeEventListener('drop', handle_drop);
		}
	};
}
