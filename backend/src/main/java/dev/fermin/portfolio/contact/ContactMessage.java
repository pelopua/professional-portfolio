package dev.fermin.portfolio.contact;

import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact_message")
public class ContactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String name;

    @Column(nullable = false, length = 200)
    private String email;

    @Column(nullable = false, length = 3000)
    private String message;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    protected ContactMessage() {
    }

    public ContactMessage(String name, String email, String message, Instant createdAt) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }
}
