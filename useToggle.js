function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}
