package server

import (
	"fmt"
	"log"
	"net/http"
	"notify-service/internal/env"
)

func NewServer() {
	registerHandlers()
	fmt.Printf("Server listening on PORT %s\n", env.GetEnv().Port)
	log.Fatal(http.ListenAndServe(env.GetEnv().Port, nil))
}

func registerHandlers() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hi")
	})
}
