-- Script that creates a trigger that resets valid_email only when email changes
CREATE TRIGGER reset_valid_email_before_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    IF OLD.email <> NEW.email THEN
        SET NEW.valid_email = 0;
    END IF;
