package seg3x02.calculatorapi.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("calculator")
class CalculatorController {
    @GetMapping("/add/{n1}/{n2}")
    fun add(@PathVariable n1: Double, @PathVariable n2: Double) = n1 + n2

    @GetMapping("/subtract/{n1}/{n2}")
    fun subtract(@PathVariable n1: Double, @PathVariable n2: Double) = n1 - n2

    @GetMapping("/multiply/{n1}/{n2}")
    fun multiply(@PathVariable n1: Double, @PathVariable n2: Double) = n1 * n2
}
