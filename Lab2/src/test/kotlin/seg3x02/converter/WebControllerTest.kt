package seg3x02.converter

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@WebMvcTest
class WebControllerTest {
    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun request_to_home() {
        mockMvc.perform(MockMvcRequestBuilders.get("/"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun addition_works() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
                .param("num1", "1")
                .param("num2", "2")
                .param("operation", "add"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("result", "3.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun multiplication_works() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
                .param("num1", "4")
                .param("num2", "5")
                .param("operation", "mul"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("result", "20.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun division_by_zero_returns_error() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/calculate")
                .param("num1", "10")
                .param("num2", "0")
                .param("operation", "div"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("error", "DivisionByZeroError"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }
}
