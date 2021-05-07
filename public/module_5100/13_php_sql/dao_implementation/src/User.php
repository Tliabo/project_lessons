<?php

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping\{Column, Entity, GeneratedValue, Id, OneToMany, Table};

/**
 * @Entity
 * @Table(name="users")
 */
class User
{
    /**
     * @Id
     * @GeneratedValue
     * @Column(type="integer")
     * @var int
     */
    protected $id;

    /**
     * @Column(type="string")
     * @var string
     */
    protected $name;

    /**
     * @OneToMany(targetEntity="Bug", mappedBy="reporter")
     * @var Bug[] An ArrayCollection of Bug objects.
     */
    protected $reportedBugs;

    /**
     * @OneToMany(targetEntity="Bug", mappedBy="engineer")
     * @var Bug[] An ArrayCollection of Bug objects.
     */
    protected $assignedBugs;

    public function __construct()
    {
        $this->reportedBugs = new ArrayCollection();
        $this->assignedBugs = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * add a bug to this user that he reported
     * @param Bug $bug
     */
    public function reportBug(Bug $bug)
    {
        $this->reportedBugs[] = $bug;
    }

    /**
     * asign a bug to this user
     * @param Bug $bug
     */
    public function assignBug(Bug $bug)
    {
        $this->assignedBugs[] = $bug;
    }
}