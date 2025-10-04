package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./www"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			http.ServeFile(w, r, "./www/index.html")
			return
		}
		fs.ServeHTTP(w, r)
	})

	log.Println("Pendrive running on mounting point: http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

