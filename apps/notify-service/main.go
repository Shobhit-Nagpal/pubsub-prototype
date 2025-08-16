package main

import (
	"fmt"
	"notify-service/internal/env"
	"notify-service/internal/server"
)

func init() {
	env.Init()
}

func main() {
	fmt.Println("Initializing server...")
	server.NewServer()
}
