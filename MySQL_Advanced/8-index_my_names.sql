-- Create indexes for the first letter name.
Create index idx_first_letter_name on students (LEFT(name, 1));
