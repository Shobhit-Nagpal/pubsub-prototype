package main

import (
	"notify-service/internal/env"
	"notify-service/internal/server"
)

func init() {
	env.Init()
}

func main() {
	server.NewServer()
}
