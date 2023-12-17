all:
	cd GenerateurExercices/ && make
	yes | cp GenerateurExercices/target/release/evaluation www/evaluation

clean:
	cd GenerateurExercices/ && make clean
	rm -rf www/evaluation

update:
	git submodule update --recursive --remote
