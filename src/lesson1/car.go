package car

type Car struct {
	Name  string
	Speed uint
}

func test() {
	myCar := Car{Name: "Ferrari", Speed: 300}
	println(myCar.Name)
	println(myCar.Speed)
}
