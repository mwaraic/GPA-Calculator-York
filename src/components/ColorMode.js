import { useColorMode } from "@chakra-ui/color-mode"
import { IconButton } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa";
export default function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>

        <IconButton 
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
      </header>
    )
  }

