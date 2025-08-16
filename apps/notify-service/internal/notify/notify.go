package notify

import (
	"os/exec"
)

func Notify(message string) error {
	cmd := exec.Command("notify-send", "-u", "normal", "-t", "5000", message)
	if err := cmd.Run(); err != nil {
		return err
	}
	return nil
}
