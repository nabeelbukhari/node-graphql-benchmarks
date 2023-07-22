package data

import (
	"encoding/json"
	"io/ioutil"
	"os"

	"github.com/fibs7000/go-graphql-benchmark/graph/model"
	"github.com/jaswdr/faker"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func GetData() []*model.Author {
	// Open our jsonFile
	jsonFile, err := os.Open("./src/data/data.json")
	// if we os.Open returns an error then handle it
	check(err)
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)

	// we initialize our Users array
	var authors []*model.Author

	// we unmarshal our byteArray which contains our
	// jsonFile's content into 'authors' which we defined above
	json.Unmarshal(byteValue, &authors)

	return authors
}

func GenData() []*model.Author {
	faker := faker.New()

	var authors []*model.Author
	for i := 0; i < 20; i++ {
		var books []*model.Book

		for k := 0; k < 3; k++ {
			book := model.Book{
				ID:       faker.UUID().V4(),
				Name:     faker.Person().LastName(),
				NumPages: faker.IntBetween(100, 10000),
			}
			books = append(books, &book)
		}

		author := model.Author{
			ID:      faker.UUID().V4(),
			Name:    faker.Person().FirstName(),
			Company: faker.Company().BS(),
			Books:   books,
		}
		authors = append(authors, &author)
	}

	return authors
}
