package seg3x02.converter

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

@Controller
class WebController {

    @ModelAttribute
    fun addAttributes(model: Model) {
        model.addAttribute("error", "")
        model.addAttribute("num1", "")
        model.addAttribute("num2", "")
        model.addAttribute("result", "")
    }

    @RequestMapping("/")
    fun home(): String {
        return "home"
    }

    @GetMapping(value = ["/calculate"])
    fun doCalculate(
        @RequestParam(value = "num1", required = false) num1: String,
        @RequestParam(value = "num2", required = false) num2: String,
        @RequestParam(value = "operation", required = false) operation: String,
        model: Model
    ): String {
        model.addAttribute("num1", num1)
        model.addAttribute("num2", num2)

        try {
            val val1 = num1.toDouble()
            val val2 = num2.toDouble()
            var res = 0.0

            when (operation) {
                "add" -> res = val1 + val2
                "sub" -> res = val1 - val2
                "mul" -> res = val1 * val2
                "div" -> {
                    if (val2 == 0.0) {
                        model.addAttribute("error", "DivisionByZeroError")
                        return "home"
                    }
                    res = val1 / val2
                }
                else -> {
                    model.addAttribute("error", "InvalidOperationError")
                    return "home"
                }
            }
            model.addAttribute("result", String.format("%.2f", res))

        } catch (exp: NumberFormatException) {
            model.addAttribute("error", "FormatError")
        }

        return "home"
    }
}
