package dev.fermin.portfolio.profile;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/profile")
public class ProfileController {

    @GetMapping
    public ProfileResponse profile() {
        return new ProfileResponse(
                "Fermín Bermejo González",
                "Technical Product Analyst | Analista Programador Java | PSPO I",
                "Perfil híbrido entre análisis funcional, desarrollo backend y orientación a producto.",
                List.of("Java", "Spring", "Spring Boot", "Oracle", "PL/SQL", "REST", "Git", "CI/CD", "Maven", "SonarQube"),
                List.of(new Certification("Professional Scrum Product Owner™ I (PSPO I)", "Scrum.org", "24 julio 2026")));
    }

    public record ProfileResponse(
            String name,
            String headline,
            String summary,
            List<String> technologies,
            List<Certification> certifications) {
    }

    public record Certification(String name, String issuer, String date) {
    }
}
