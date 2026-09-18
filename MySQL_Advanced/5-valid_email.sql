-- Reset atribute valid_email after email has changed.
DELIMITER $
CREATE TRIGGER reset_attributeAFTER BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    UPDATE items
    SET quantity = quantity - NEW.number
    WHERE name = NEW.item_name;
END; 
$
