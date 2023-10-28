all:
	cd GenerateurExercices/ && cargo build --release
	yes | cp GenerateurExercices/target/release/evaluation www/evaluation
	yes | cp GenerateurExercices/target/release/exercices www/exercices

clean:
	cd GenerateurExercices/ && cargo clean
	rm -rf www/evaluation www/exercices

update:
	git submodule update --recursive --remote
